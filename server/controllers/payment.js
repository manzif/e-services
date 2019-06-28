import model from '../models';

const {Pay}=model

class Opay{

static receiveCallback(req, res) {
    
      const findPay = {
          'statusDescription' :req.body.statusDescription,
          'spTransactionId' : req.body.statusDescription,
          'walletTransactionId' : req.body.walletTransactionId,
          'chargedCommission' : req.body.chargedCommission,
          'currency' : req.body.currency,
          'paidAmount' : req.body.paidAmount,
          'transactionId' : req.body.transactionId,
          'statusCode' : req.body.statusCode,
          'status' : req.body.status
      }
        Pay.create(findPay)
        .then(findPay => res.status(201).send({
          status: 201,
          message: 'User successfully created',
          findPay
        })).catch((error) => {
          res.status(500).send({ status: 500, error: error.errors[0].message });
        })
  }
}
export default Opay;