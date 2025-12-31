from PIL import Image

def remove_white_background(image_path, output_path):
    img = Image.open(image_path)
    img = img.convert("RGBA")
    
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # Change all white (also shades of whites) pixels to transparent
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
    
    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Processed image saved to {output_path}")

if __name__ == "__main__":
    remove_white_background(
        "/home/ubuntu/proerecta-landing/client/public/images/social-profile-universal.png",
        "/home/ubuntu/proerecta-landing/client/public/images/social-profile-universal-transparent.png"
    )
