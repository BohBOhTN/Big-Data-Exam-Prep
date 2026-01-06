"""
QCM Markdown to JSON Extractor
==============================
This script parses QCM (Quiz) markdown files with corrections and extracts
structured data into clean JSON files.

Author: Auto-generated
"""

import os
import re
import json
from pathlib import Path


def clean_text(text: str) -> str:
    """
    Clean text by removing markdown formatting and special characters.
    
    Removes:
    - Bold markers (**)
    - Checkmarks (✓, ✅)
    - Lightbulb emoji (💡)
    - Target emoji (🎯)
    - Extra whitespace
    """
    if not text:
        return ""
    
    # Remove checkmark symbols
    text = text.replace('✓', '').replace('✅', '')
    
    # Remove lightbulb and target emojis
    text = text.replace('💡', '').replace('🎯', '')
    
    # Remove bold markers (**)
    text = re.sub(r'\*\*([^*]+)\*\*', r'\1', text)
    
    # Remove any remaining asterisks used for emphasis
    text = re.sub(r'\*([^*]+)\*', r'\1', text)
    
    # Clean up extra whitespace
    text = ' '.join(text.split())
    
    return text.strip()


def clean_option_text(text: str) -> str:
    """
    Clean option text specifically - removes the leading letter and formatting.
    Example: "- A) Tous les 6 mois" -> "Tous les 6 mois"
             "- **B) Some answer ✓**" -> "Some answer"
    """
    # Remove leading dash and whitespace
    text = re.sub(r'^-\s*', '', text.strip())
    
    # Remove bold markers
    text = re.sub(r'\*\*([^*]+)\*\*', r'\1', text)
    
    # Remove checkmarks
    text = text.replace('✓', '').replace('✅', '')
    
    # Extract option letter and text: "A) text" -> ("A", "text")
    match = re.match(r'^([A-Z])\)\s*(.+)$', text.strip())
    if match:
        return match.group(2).strip()
    
    return text.strip()


def extract_option_letter(text: str) -> str:
    """
    Extract the option letter from an option line.
    Example: "- A) Some text" -> "A"
             "- **B) Some text ✓**" -> "B"
    """
    # Remove leading dash
    text = re.sub(r'^-\s*', '', text.strip())
    
    # Remove bold markers
    text = re.sub(r'\*\*([^*]+)\*\*', r'\1', text)
    
    # Extract letter
    match = re.match(r'^([A-Z])\)', text.strip())
    if match:
        return match.group(1)
    
    return ""


def is_correct_option(text: str) -> bool:
    """
    Check if an option line indicates the correct answer.
    Correct answers have ** bold markers and/or ✓ checkmark.
    """
    return '**' in text and ('✓' in text or text.strip().startswith('- **'))


def parse_qcm_file(filepath: str) -> dict:
    """
    Parse a QCM markdown file and extract structured data.
    
    Returns a dictionary with:
    - topic_name: The topic/subject name
    - topic_description: Description (subtitle)
    - author: Course author
    - num_questions: Number of questions
    - questions: List of question objects
    """
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    lines = content.split('\n')
    
    result = {
        "topic_name": "",
        "topic_description": "",
        "author": "",
        "num_questions": 0,
        "questions": []
    }
    
    # Extract header information
    description_found = False
    for i, line in enumerate(lines):
        # Topic name from # QCM - Topic
        if line.startswith('# QCM - '):
            result["topic_name"] = line.replace('# QCM - ', '').strip()
        
        # Topic description from ## subtitle (first ## line only, skip exam tips sections)
        elif line.startswith('## ') and not description_found:
            desc = line.replace('## ', '').strip()
            # Skip if it contains exam tips emoji or similar
            if '🎯' not in desc:
                result["topic_description"] = clean_text(desc)
                description_found = True
            elif 'Questions' in desc or 'Corrections' in desc:
                result["topic_description"] = clean_text(desc)
                description_found = True
        
        # Author
        elif '**Auteur du cours:**' in line:
            author_match = re.search(r'\*\*Auteur du cours:\*\*\s*(.+)', line)
            if author_match:
                result["author"] = author_match.group(1).strip()
        
        # Number of questions
        elif '**Nombre de questions:**' in line:
            num_match = re.search(r'\*\*Nombre de questions:\*\*\s*(\d+)', line)
            if num_match:
                result["num_questions"] = int(num_match.group(1))
    
    # Parse questions using regex to find question blocks
    # Pattern: ### Question N followed by content until next ### Question or end
    question_pattern = r'### Question (\d+)\s*\n(.+?)(?=### Question \d+|$)'
    question_matches = re.findall(question_pattern, content, re.DOTALL)
    
    for q_num, q_content in question_matches:
        question_obj = parse_question_block(int(q_num), q_content)
        if question_obj:
            result["questions"].append(question_obj)
    
    return result


def parse_question_block(question_number: int, content: str) -> dict:
    """
    Parse a single question block and extract:
    - question_number
    - question_text
    - options (list of {letter, text, is_correct})
    - correct_answer (letter)
    - conseil (advice/tip)
    """
    lines = content.strip().split('\n')
    
    question_obj = {
        "question_number": question_number,
        "question_text": "",
        "options": [],
        "correct_answer": "",
        "conseil": ""
    }
    
    # States for parsing
    in_question = False
    in_options = False
    in_conseil = False
    question_lines = []
    conseil_lines = []
    
    for line in lines:
        stripped = line.strip()
        
        # Skip empty lines and separators
        if not stripped or stripped == '---':
            continue
        
        # Question text (starts with ** and is at the beginning)
        if stripped.startswith('**') and stripped.endswith('**') and not in_options and not question_obj["question_text"]:
            # This is the question text
            question_text = stripped.strip('*').strip()
            question_obj["question_text"] = clean_text(question_text)
            in_question = False
            in_options = True
            continue
        
        # Options (start with - A), - B), etc. or - **A), - **B))
        if re.match(r'^-\s*\**[A-Z]\)', stripped):
            in_options = True
            in_conseil = False
            
            letter = extract_option_letter(stripped)
            option_text = clean_option_text(stripped)
            is_correct = is_correct_option(stripped)
            
            if is_correct:
                question_obj["correct_answer"] = letter
            
            question_obj["options"].append({
                "letter": letter,
                "text": option_text,
                "is_correct": is_correct
            })
            continue
        
        # Correct answer confirmation line (✅ Réponse: X)
        if 'Réponse:' in stripped or 'Reponse:' in stripped:
            answer_match = re.search(r'Réponse:\s*([A-Z])', stripped) or re.search(r'Reponse:\s*([A-Z])', stripped)
            if answer_match:
                # Verify or set the correct answer
                confirmed_answer = answer_match.group(1)
                if not question_obj["correct_answer"]:
                    question_obj["correct_answer"] = confirmed_answer
            continue
        
        # Conseil (starts with 💡 **Conseil:** or just **Conseil:**)
        if 'Conseil:' in stripped or '💡' in stripped:
            in_conseil = True
            in_options = False
            # Extract conseil text
            conseil_text = re.sub(r'^💡\s*', '', stripped)
            conseil_text = re.sub(r'\*\*Conseil:\*\*\s*', '', conseil_text)
            conseil_text = clean_text(conseil_text)
            if conseil_text:
                conseil_lines.append(conseil_text)
            continue
        
        # Continue collecting conseil if we're in conseil mode
        if in_conseil and stripped:
            conseil_lines.append(clean_text(stripped))
    
    # Join conseil lines
    question_obj["conseil"] = ' '.join(conseil_lines)
    
    return question_obj


def process_all_qcm_files(exams_dir: str, output_dir: str = None):
    """
    Process all QCM files in the exams directory and create JSON files.
    
    Args:
        exams_dir: Path to the 'exams with correction' directory
        output_dir: Path to output JSON files (default: creates 'qcm_json' folder)
    """
    exams_path = Path(exams_dir)
    
    if output_dir is None:
        output_path = exams_path.parent / 'qcm_json'
    else:
        output_path = Path(output_dir)
    
    # Create output directory
    output_path.mkdir(exist_ok=True)
    
    # Find all exam folders
    exam_folders = [f for f in exams_path.iterdir() if f.is_dir()]
    
    processed_files = []
    
    for exam_folder in exam_folders:
        qcm_file = exam_folder / 'qcm_questions_avec_corrections.md'
        
        if qcm_file.exists():
            print(f"Processing: {exam_folder.name}")
            
            try:
                # Parse the QCM file
                qcm_data = parse_qcm_file(str(qcm_file))
                
                # Create output filename (use folder name without _exam suffix)
                folder_name = exam_folder.name.replace('_exam', '')
                output_filename = f"{folder_name}_qcm.json"
                output_filepath = output_path / output_filename
                
                # Write JSON file
                with open(output_filepath, 'w', encoding='utf-8') as f:
                    json.dump(qcm_data, f, ensure_ascii=False, indent=2)
                
                processed_files.append({
                    "source": str(qcm_file),
                    "output": str(output_filepath),
                    "topic": qcm_data["topic_name"],
                    "num_questions": len(qcm_data["questions"])
                })
                
                print(f"  ✓ Created: {output_filename} ({len(qcm_data['questions'])} questions)")
                
            except Exception as e:
                print(f"  ✗ Error processing {exam_folder.name}: {str(e)}")
    
    # Create a summary/index file
    summary = {
        "total_files": len(processed_files),
        "total_questions": sum(f["num_questions"] for f in processed_files),
        "files": processed_files
    }
    
    summary_path = output_path / "_index.json"
    with open(summary_path, 'w', encoding='utf-8') as f:
        json.dump(summary, f, ensure_ascii=False, indent=2)
    
    print(f"\n{'='*50}")
    print(f"Summary:")
    print(f"  - Files processed: {summary['total_files']}")
    print(f"  - Total questions: {summary['total_questions']}")
    print(f"  - Output directory: {output_path}")
    print(f"  - Index file: {summary_path}")
    
    return summary


def main():
    """Main entry point."""
    # Get the script's directory
    script_dir = Path(__file__).parent
    
    # Define paths
    exams_dir = script_dir / 'exams with correction'
    
    if not exams_dir.exists():
        print(f"Error: Directory not found: {exams_dir}")
        print("Please ensure the 'exams with correction' folder exists in the same directory as this script.")
        return
    
    print("QCM Markdown to JSON Extractor")
    print("=" * 50)
    print(f"Source directory: {exams_dir}")
    print()
    
    # Process all files
    process_all_qcm_files(str(exams_dir))


if __name__ == "__main__":
    main()
