from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/how-to-play")
def how_to_play():
    return "How to Play Hangman!"

@app.route("/leaderboard")
def leaderboard():
    return "Leaderboard Coming Soon!"

@app.route("/contact")
def contact():
    return "Contact Us at hangman@example.com!"

if __name__ == "__main__":
    app.run(debug=True)

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')  # Save the HTML file as "templates/index.html"

if __name__ == '__main__':
    app.run(debug=True)

# app.py

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')  # This will render your HTML page

if __name__ == '__main__':
    app.run(debug=True)

# app.py (Flask API for leaderboard data)

from flask import Flask, jsonify

app = Flask(__name__)

# Sample leaderboard data (you would normally get this from a database)
leaderboard = [
    {"rank": 1, "name": "Player1", "score": 1500},
    {"rank": 2, "name": "Player2", "score": 1200},
    {"rank": 3, "name": "Player3", "score": 1000},
    {"rank": 4, "name": "Player4", "score": 850},
    {"rank": 5, "name": "Player5", "score": 700}
]

# Endpoint to fetch leaderboard data
@app.route('/api/leaderboard', methods=['GET'])
def get_leaderboard():
    return jsonify(leaderboard)

if __name__ == "__main__":
    app.run(debug=True)


from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# A simple in-memory storage for testimonials (You can replace this with a database in production)
testimonials = [
    {"name": "John Doe", "message": "This game is so fun! I love the challenge and the different themes!", "avatar": "https://via.placeholder.com/60"},
    {"name": "Jane Smith", "message": "A great way to test my vocabulary skills. I'm addicted!", "avatar": "https://via.placeholder.com/60"},
    {"name": "Mark Wilson", "message": "The multiplayer mode makes this game even more exciting! Highly recommend it.", "avatar": "https://via.placeholder.com/60"}
]

@app.route('/')
def home():
    return render_template('index.html', testimonials=testimonials)

@app.route('/add_testimonial', methods=['POST'])
def add_testimonial():
    name = request.form['name']
    message = request.form['message']
    avatar = request.form['avatar']  # URL to an avatar image
    testimonials.append({"name": name, "message": message, "avatar": avatar})
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)

# Example Python Flask Backend to Render Footer Content

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
