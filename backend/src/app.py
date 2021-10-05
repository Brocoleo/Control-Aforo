from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required 
from flask_jwt_extended import JWTManager

from bson import ObjectId

# Instantiation
app = Flask(__name__)
# Database
app.config['MONGO_URI'] = 'mongodb://localhost/controlaforo'
mongo = PyMongo(app)

#JWT
app.config["JWT_SECRET_KEY"] = "asfg345mnkl76sm124ou8ay7tasdt"  # Change this!
jwt = JWTManager(app)


# Settings
CORS(app)

# Colecciones de la Database
estudiante = mongo.db.estudiantes
profesor = mongo.db.profesores
evento = mongo.db.evento
modulo = mongo.db.modulos



# Token login
@app.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)


# Rutas Estudiantes
@app.route('/users', methods=['POST'])
def createUser():
  print(request.json)
  id = estudiante.insert({
    'name': request.json['name'],
    'email': request.json['email'],
    'password': request.json['password']
  })
  return jsonify(str(ObjectId(id)))


@app.route('/users', methods=['GET'])
def getUsers():
    users = []
    for doc in estudiante.find():
        users.append({
            '_id': str(ObjectId(doc['_id'])),
            'name': doc['name'],
            'email': doc['email'],
            'password': doc['password']
        })
    return jsonify(users)

@app.route('/users/<id>', methods=['GET'])
def getUser(id):
  user = estudiante.find_one({'_id': ObjectId(id)})
  print(user)
  return jsonify({
      '_id': str(ObjectId(user['_id'])),
      'name': user['name'],
      'email': user['email'],
      'password': user['password']
  })


@app.route('/users/<id>', methods=['DELETE'])
def deleteUser(id):
  estudiante.delete_one({'_id': ObjectId(id)})
  return jsonify({'message': 'User Deleted'})

@app.route('/users/<id>', methods=['PUT'])
def updateUser(id):
  print(request.json)
  estudiante.update_one({'_id': ObjectId(id)}, {"$set": {
    'name': request.json['name'],
    'email': request.json['email'],
    'password': request.json['password']
  }})
  return jsonify({'message': 'User Updated'})


###################################################
# Rutas Profesores
@app.route('/teachers', methods=['POST'])
def createTeacher():
  print(request.json)
  id = profesor.insert({
    'name': request.json['name'],
    'email': request.json['email'],
    'password': request.json['password']
  })
  return jsonify(str(ObjectId(id)))


@app.route('/teachers', methods=['GET'])
def getTeachers():
    teachers = []
    for doc in profesor.find():
        teachers.append({
            '_id': str(ObjectId(doc['_id'])),
            'name': doc['name'],
            'email': doc['email'],
            'password': doc['password']
        })
    return jsonify(teachers)

@app.route('/teachers/<id>', methods=['GET'])
def getTeacher(id):
  teacher = profesor.find_one({'_id': ObjectId(id)})
  print(teacher)
  return jsonify({
      '_id': str(ObjectId(teacher['_id'])),
      'name': teacher['name'],
      'email': teacher['email'],
      'password': teacher['password']
  })


@app.route('/teachers/<id>', methods=['DELETE'])
def deleteTeacher(id):
  profesor.delete_one({'_id': ObjectId(id)})
  return jsonify({'message': 'User Deleted'})

@app.route('/teacher/<id>', methods=['PUT'])
def updateTeacher(id):
  print(request.json)
  profesor.update_one({'_id': ObjectId(id)}, {"$set": {
    'name': request.json['name'],
    'email': request.json['email'],
    'password': request.json['password']
  }})
  return jsonify({'message': 'User Updated'})






###################################################

# Rutas Eventos
@app.route('/eventos', methods=['POST'])
def createEvento():
  print(request.json)
  id = evento.insert({
    'lugar': request.json['lugar'],
    'aforo': request.json['aforo'],
    'ramo': request.json['ramo'],
    'profesor': request.json['profesor'],
    'fecha': request.json['fecha'],
    'bloque': request.json['bloque']
  })
  return jsonify(str(ObjectId(id)))


@app.route('/eventos', methods=['GET'])
def getEventos():
    eventos = []
    for doc in evento.find():
        eventos.append({
            '_id': str(ObjectId(doc['_id'])),
            'lugar': doc['lugar'],
            'aforo': doc['aforo'],
            'ramo': doc['ramo'],
            'profesor': doc['profesor'],
            'fecha': doc['fecha'],
            'bloque': doc['bloque']
        })
    return jsonify(eventos)

@app.route('/eventos/<id>', methods=['GET'])
def getEvento(id):
  eventoX = evento.find_one({'_id': ObjectId(id)})
  print(eventoX)
  return jsonify({
      '_id': str(ObjectId(eventoX['_id'])),
      'lugar': eventoX['lugar'],
      'aforo': eventoX['aforo'],
      'ramo': eventoX['ramo'],
      'profesor': eventoX['profesor'],
      'fecha': eventoX['fecha'],
      'bloque': eventoX['bloque']
  })


@app.route('/eventos/<id>', methods=['DELETE'])
def deleteEvento(id):
  evento.delete_one({'_id': ObjectId(id)})
  return jsonify({'message': 'Evento Eliminado'})

@app.route('/eventos/<id>', methods=['PUT'])
def updateEvento(id):
  print(request.json)
  evento.update_one({'_id': ObjectId(id)}, {"$set": {
    'lugar': request.json['lugar'],
    'aforo': request.json['aforo'],
    'ramo': request.json['ramo'],
    'profesor': request.json['profesor'],
    'fecha': request.json['fecha'],
    'bloque': request.json['bloque']
  }})
  return jsonify({'message': 'User Updated'})






###################################################
# Rutas Modulos
@app.route('/modulos', methods=['POST'])
def createModulo():
  print(request.json)
  id = modulo.insert({
    'capacidad': request.json['capacidad'],
    'ramo': request.json['ramo'],
    'carrera': request.json['carrera'],
  })
  return jsonify(str(ObjectId(id)))


@app.route('/modulos', methods=['GET'])
def getModulos():
    modulos = []
    for doc in modulo.find():
        modulos.append({
            '_id': str(ObjectId(doc['_id'])),
            'capacidad': doc['capacidad'],
            'ramo': doc['ramo'],
            'carrera': doc['carrera'],
        })
    return jsonify(modulos)

@app.route('/modulos/<id>', methods=['GET'])
def getModulo(id):
  moduloX = modulo.find_one({'_id': ObjectId(id)})
  print(moduloX)
  return jsonify({
      '_id': str(ObjectId(moduloX['_id'])),
      'capacidad': moduloX['capacidad'],
      'ramo': moduloX['ramo'],
      'carrera': moduloX['carrera']
  })


@app.route('/modulos/<id>', methods=['DELETE'])
def deleteModulo(id):
  modulo.delete_one({'_id': ObjectId(id)})
  return jsonify({'message': 'User Deleted'})

@app.route('/modulos/<id>', methods=['PUT'])
def updateModulo(id):
  print(request.json)
  modulo.update_one({'_id': ObjectId(id)}, {"$set": {
    'capacidad': request.json['capacidad'],
    'ramo': request.json['ramo'],
    'carrera': request.json['carrera'],
  }})
  return jsonify({'message': 'User Updated'})
  ###################################################
if __name__ == "__main__":
    app.run(debug=True)