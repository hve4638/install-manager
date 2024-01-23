from flask import Flask, jsonify, redirect, render_template, request, url_for, session

app = Flask(__name__)
app.secret_key = "SECRET_KEY"

@app.route('/')
def rootpage():
    return render_template('terminal-template.html')
    
if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)