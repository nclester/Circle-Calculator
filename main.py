from flask import Flask, render_template, request, jsonify
import math

app = Flask(__name__)

@app.route('/')
def Index():   
    return render_template('Index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    radius = float(request.form['radiusInput'])
    
    area = math.pi * radius ** 2
    circumference = 2 * math.pi * radius
    
    return render_template('circlePage.html', radius=radius, area=round(area, 2), circumference=round(circumference, 2))
if __name__ == '__main__':
    app.run(debug=True)