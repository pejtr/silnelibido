import os
from PIL import Image

def optimize_image(input_path, output_path, max_width=1200, quality=80):
    try:
        with Image.open(input_path) as img:
            # Convert to RGB if necessary
            if img.mode in ('RGBA', 'P'):
                img = img.convert('RGB')
            
            # Resize if larger than max_width
            if img.width > max_width:
                ratio = max_width / img.width
                new_height = int(img.height * ratio)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
            
            # Save as WebP
            img.save(output_path, 'WEBP', quality=quality)
            print(f"Optimized: {input_path} -> {output_path}")
            
            # Print size comparison
            original_size = os.path.getsize(input_path) / 1024
            new_size = os.path.getsize(output_path) / 1024
            print(f"Size reduced: {original_size:.2f}KB -> {new_size:.2f}KB")
            
    except Exception as e:
        print(f"Error optimizing {input_path}: {e}")

def process_directory(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.jpg', '.jpeg', '.png')):
                input_path = os.path.join(root, file)
                output_path = os.path.splitext(input_path)[0] + '.webp'
                
                # Skip if webp already exists and is newer
                if os.path.exists(output_path) and os.path.getmtime(output_path) > os.path.getmtime(input_path):
                    continue
                    
                optimize_image(input_path, output_path)

# Run optimization on the entire images directory
process_directory('/home/ubuntu/proerecta-landing/client/public/images')
