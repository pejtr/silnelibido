import cv2
import numpy as np

def remove_white_background(image_path, output_path):
    # Load the image
    img = cv2.imread(image_path)
    
    # Convert to RGBA (add alpha channel)
    img = cv2.cvtColor(img, cv2.COLOR_BGR2BGRA)
    
    # Define range for white color
    lower_white = np.array([240, 240, 240, 255])
    upper_white = np.array([255, 255, 255, 255])
    
    # Create a mask for white pixels
    mask = cv2.inRange(img, lower_white, upper_white)
    
    # Set alpha channel to 0 for white pixels
    img[mask > 0] = [0, 0, 0, 0]
    
    # Save the result
    cv2.imwrite(output_path, img)
    print(f"Processed image saved to {output_path}")

if __name__ == "__main__":
    remove_white_background(
        "/home/ubuntu/proerecta-landing/client/public/images/social-profile-universal.png",
        "/home/ubuntu/proerecta-landing/client/public/images/social-profile-universal-transparent.png"
    )
