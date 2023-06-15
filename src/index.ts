import express from 'express';
import cors from 'cors';
import './db/mongoose';
import { client } from './db/mongoose';
import Envios from './models/envios';

const app = express(); // instanciando a express.

app.use(express.json()); // esto nos permite devolver json en la api.
app.use(cors()); // seguridad para acceder a la api.

app.get('/envios/status', async (req: express.Request, res: express.Response) => {
  // endpoint
  console.log(req.query);
  try {
    const database = client.db('envios');
    const collection = database.collection('tracking');
    const query = { tracking_id: req.query.tracking_id };

    const response = await collection.findOne(query);
    if (response !== null) {
      res.status(200).send(response);
    } else {
      throw new Error();
    }
  } catch (error) {
    res.status(404).send({
      error: 'Tracking no encontrado',
    });
  }
});

app.post('/envios', async (req: express.Request, res: express.Response) => {
  try {
    const nuevoEnvio = new Envios(req.body);

    await nuevoEnvio.save();
    console.log(nuevoEnvio);
    res.status(202).send({
      message: 'creado correctamente',
    });
  } catch (error) {
    res.status(400).send({
      error: 'Error creando un nuevo envío',
    });
  }
});

app.listen(3000, () => {
  console.log('Listening to port 3000'); // arranca por el puerto 3000 que devuelve la informacion de la api.
});
