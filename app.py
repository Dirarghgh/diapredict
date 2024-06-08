# app.py
from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array, load_img
import numpy as np

app = FastAPI()

# Load the trained model
model_vgg19 = load_model('/content/drive/MyDrive/vgg_model.h5')

# Define the class labels
labels = ["No_DR", "DR"]

@app.post("/classify-image/")
async def classify_image(file: UploadFile = File(...)):
    try:
        # Load the image
        image = load_img(file.file, target_size=(224, 224))
        image = img_to_array(image) / 255.0
        image = np.expand_dims(image, axis=0)
        
        # Make prediction
        prediction = model_vgg19.predict(image)
        class_index = np.argmax(prediction)
        class_name = labels[class_index]
        score = prediction[0][class_index]
        
        return JSONResponse(content={"class_name": class_name, "score": float(score)})
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)
