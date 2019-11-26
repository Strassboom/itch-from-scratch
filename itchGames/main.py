from flask import Flask, render_template

app = Flask(__name__)

@app.route("/games/<gameName>")
def game(gameName):
    return render_template(gameName+"/index.html")

@app.route("/")
def practice():
    return render_template("gameDevPractice/gameDevPractive.html")

if __name__ == "__main__":
    app.run(debug=True)