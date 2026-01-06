import os
import fitz  # PyMuPDF

def extract_pdf_pages_as_images(pdf_folder="pdfs", output_base_folder="extracted_images", dpi=150):
    """
    Extract each page of PDF files as images.
    
    Args:
        pdf_folder: Folder containing PDF files
        output_base_folder: Base folder for extracted images
        dpi: Resolution for the extracted images (default 150)
    """
    # Get the script's directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    pdf_path = os.path.join(script_dir, pdf_folder)
    output_path = os.path.join(script_dir, output_base_folder)
    
    # Check if pdfs folder exists
    if not os.path.exists(pdf_path):
        print(f"Error: '{pdf_folder}' folder not found!")
        return
    
    # Create output base folder if it doesn't exist
    os.makedirs(output_path, exist_ok=True)
    
    # Get all PDF files
    pdf_files = [f for f in os.listdir(pdf_path) if f.lower().endswith('.pdf')]
    
    if not pdf_files:
        print(f"No PDF files found in '{pdf_folder}' folder.")
        return
    
    print(f"Found {len(pdf_files)} PDF file(s) to process.\n")
    
    # Process each PDF file
    for pdf_file in pdf_files:
        pdf_file_path = os.path.join(pdf_path, pdf_file)
        
        # Create folder name from PDF name (without extension)
        folder_name = os.path.splitext(pdf_file)[0]
        image_folder = os.path.join(output_path, folder_name)
        
        # Create folder for this PDF's images
        os.makedirs(image_folder, exist_ok=True)
        
        print(f"Processing: {pdf_file}")
        
        try:
            # Open the PDF
            doc = fitz.open(pdf_file_path)
            num_pages = len(doc)
            
            print(f"  - Pages: {num_pages}")
            
            # Extract each page as an image
            for page_num in range(num_pages):
                page = doc[page_num]
                
                # Set the zoom factor based on DPI (72 is the base DPI)
                zoom = dpi / 72
                matrix = fitz.Matrix(zoom, zoom)
                
                # Render page to an image
                pix = page.get_pixmap(matrix=matrix)
                
                # Save the image
                image_filename = f"page_{page_num + 1:03d}.png"
                image_path = os.path.join(image_folder, image_filename)
                pix.save(image_path)
                
                print(f"  - Extracted: {image_filename}")
            
            doc.close()
            print(f"  ✓ Completed! Images saved to: {image_folder}\n")
            
        except Exception as e:
            print(f"  ✗ Error processing {pdf_file}: {str(e)}\n")
    
    print("=" * 50)
    print("All PDFs processed successfully!")
    print(f"Images saved in: {output_path}")


if __name__ == "__main__":
    # You can customize these parameters:
    # - pdf_folder: folder containing your PDF (default: "pdfs")
    # - output_base_folder: where to save extracted images (default: "extracted_images")
    # - dpi: image quality/resolution (default: 150, higher = better quality but larger files)
    
    extract_pdf_pages_as_images(
        pdf_folder="pdfs",
        output_base_folder="extracted_images",
        dpi=150
    )
