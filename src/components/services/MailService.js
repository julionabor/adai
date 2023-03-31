
const mailer = require('nodemailer')
module.exports = (email, nome, contacto, mensagem) => {
    const smtp = mailer.createTransport({
        host: 'smtp.umbler.com',
        port: 587,
        secure: false, //SSSL, TLS
        auth: {
            user: 'julio@adai-sjm.pt',
            pass: 'Amsterda-1'
        }
    })
    const mail = {
        from: 'julio@adai-sjm.pt',
        to: email,
        subject: `E-mail enviado por ${nome} com o contacto ${contacto}`,
        text: mensagem
        /* html: '' */
    }
    return new Promise ((resolve, reject) => {
        smtp.sendMail(mail)
        .then(response => {
            smtp.close()
            return resolve(response)
        })
        .catch(error => {
            smtp.close()
            return reject(error)
        })
    })
}