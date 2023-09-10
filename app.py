from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/public/<path:path>')
def serve_static(path):
    return send_from_directory('static', path)

@app.route('/summer')
def summer():
    return render_template('summer.html')

@app.route('/spring')
def spring():
    return render_template('spring.html')

@app.route('/winter')
def winter():
    return render_template('winter.html')

@app.route('/autumn')
def autumn():
    return render_template('autumn.html')

if __name__ == '__main__':
    app.run(debug=True)