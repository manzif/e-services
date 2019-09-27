import multer from 'multer';
import Users from '../controllers/user';
import Services from '../controllers/services';
import Opay from '../controllers/payment';
import express from 'express'

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, './server/uploads/');
  },
  filename: function(req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if(file.mimetype === 'image/jpeg' ||file.mimetype === 'image/png'){
      cb(null, true)
  } else{
      cb(null, false)
  }
}

const upload = multer({
  storage: storage,
  limits: {
      fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

          const app = express.Router();
          app.get('/api', (req, res) => res.status(200).send({
            message: 'Welcome to E-services API!',
          }));

          app.post('/api/users', Users.signUp); // API route for user to signup
          app.get('/api/users', Users.list);
        //   app.get('/api/users', Users.listOne);
          app.delete('/api/users/:id', Users.DeleteUser);
          app.post('/api/users/signin', Users.signin);
          app.post('/api/services', upload.single('image'), Services.post)
          app.get('/api/services',  Services.list)
          app.get('/api/services/:id',  Services.getService)
          app.delete('/api/services/:id',  Services.deleteMember)
          app.post('/api/pay/receive', Opay.receiveCallback);
          
          export default app;