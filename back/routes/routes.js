const express = require('express');
const router = express.Router();
const participantsCtrl = require('../controlers/controlers');




router.post('http://localhost:3000/participants', participantsCtrl.createParticipant);
router.get('http://localhost:3000/participants', participantsCtrl.getAllParticipants);
router.get('http://localhost:3000/participants/:id', participantsCtrl.getOneParticipant);
router.delete('http://localhost:3000/participants/:id', participantsCtrl.deleteParticipant);


module.exports = router;