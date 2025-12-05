from PIL import Image
import os

input_path = '/home/ubuntu/proerecta-landing/client/public/images/proerecta-klasik-trans-new.png'
output_path = '/home/ubuntu/proerecta-landing/client/public/images/proerecta-klasik-trans-new.webp'

try:
    with Image.open(input_path) as img:
        img.save(output_path, 'WEBP', quality=90)
        print(f"Successfully converted {input_path} to {output_path}")
except Exception as e:
    print(f"Error converting image: {e}")
