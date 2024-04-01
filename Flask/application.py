from flask import Flask, jsonify, render_template
from flask_cors import CORS
app = Flask(__name__)

CORS(app)
 
@app.route('/name')
def index():
    return render_template('index.html')
 
@app.route('/api/data')
def get_data():
    data = {'message': 'Hello from Flask!'}
    return jsonify(data)

@app.route('/api/shift', methods=['POST'])
def shift():
    return jsonify({'success': True})

if __name__ == '__main__':
    app.run(debug=True)
