from fastapi import FastAPI
from pydantic import BaseModel
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
import torch.nn.functional as F

app = FastAPI()

MODEL_NAME = "seara/rubert-tiny2-russian-emotion-detection-ru-go-emotions"
tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
model = AutoModelForSequenceClassification.from_pretrained(MODEL_NAME)

id2label = model.config.id2label
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)

class TextInput(BaseModel):
    text: str

@app.post("/analyze")
def analyze_text(data: TextInput):
    inputs = tokenizer(data.text, return_tensors="pt", truncation=True, padding=True).to(device)
    with torch.no_grad():
        outputs = model(**inputs)
        probs = F.softmax(outputs.logits, dim=1)[0]

    # Получаем топ-3 вероятности
    top_probs, top_indices = torch.topk(probs, 3)

    results = []
    for i in range(3):
        results.append({
            "emotion": id2label[top_indices[i].item()],
            "confidence": round(top_probs[i].item(), 4)
        })

    return {"results": results}


