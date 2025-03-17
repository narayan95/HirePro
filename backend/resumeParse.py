import fitz  # PyMuPDF for PDF extraction
import docx
import google.generativeai as genai

# Configure Google AI Model
GEMINI_API_KEY = # add your own api key

genai.configure(api_key=GEMINI_API_KEY)  # Replace with your actual key
model = genai.GenerativeModel("gemini-1.5-pro-latest")

# Function to extract text from PDF
def extract_text_from_pdf(pdf_path):
    text = ""
    with fitz.open(pdf_path) as doc:
        for page in doc:
            text += page.get_text("text") + "\n"
    return text

# Function to extract text from DOCX
def extract_text_from_docx(docx_path):
    doc = docx.Document(docx_path)
    return "\n".join([para.text for para in doc.paragraphs])

# Function to generate interview questions using AI
def generate_interview_questions(resume_text):
    prompt = f"""
    You are an AI interviewer. Based on the following resume, generate 5 interview questions.

    Resume: {resume_text}

    Format:
    1. Question 1
    2. Question 2
    3. Question 3
    4. Question 4
    5. Question 5
    """

    response = model.generate_content(prompt)
    return response.text if response else "No response from AI"

# Main function to process resume and generate questions
def process_resume(file_path):
    if file_path.endswith(".pdf"):
        resume_text = extract_text_from_pdf(file_path)
    elif file_path.endswith(".docx"):
        resume_text = extract_text_from_docx(file_path)
    else:
        return "Unsupported file format"

    return generate_interview_questions(resume_text)

# Example Usage
file_path = "/ShreyanshNarayanCV.pdf"  # Change to your actual file
questions = process_resume(file_path)
print(questions)
