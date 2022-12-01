// import { isCollectSignature } from 'libs/crypto';

// export default async function handler(req, res) {
//   try {
//     if (!isCollectSignature(req.headers['x-microcms-signature'], req.body)) {
//       return res.status(401).send('Invalid token');
//     }
//      const playerId = req.body.contents.new.publishValue.player.id;
//      await res.unstable_revalidate(`/players/${playerId}`);

//     return res.status(200).send();
//   } catch (err) {
//     return res.status(500).send('Error revalidating');
//   }
// }
