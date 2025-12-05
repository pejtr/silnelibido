from PIL import Image
import os

def optimize_image(input_path, output_path, max_width=1920, quality=80):
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

# Optimize hero-couple.jpg (50+)
optimize_image(
    '/home/ubuntu/proerecta-landing/client/public/images/hero-couple.jpg',
    '/home/ubuntu/proerecta-landing/client/public/images/hero-couple.webp'
)

# Optimize hero-couple-35.jpg (35+)
optimize_image(
    '/home/ubuntu/proerecta-landing/client/public/images/hero-couple-35.jpg',
    '/home/ubuntu/proerecta-landing/client/public/images/hero-couple-35.webp'
)
