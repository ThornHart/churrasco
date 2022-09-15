import emailjs from 'emailjs-com'
import React from 'react'

export default function ContactUs(){
    function sendEmail(e){
        e.preventDefault()
        emailjs.sendForm('gmailMessage','template_mejd4zs', e.target, 'ycp9q9LFtM2Wzw-u8')
        .then((result)=>{
            alert('Sua Opiniao foi enviada! Agradecemos o seu feedback!')
        }, (error) =>{
            alert(error.message)
        })
        e.target.reset()
    }

    return(
        <div>
            <div> 
                <h2 style={{color:'#fff'}}>Ouvidoria</h2>
                <form onSubmit={sendEmail}>
                    <div className='row pt-5 mx-auto'>
                        <div style={{display:'flex'}} >
                            <div>
                                <label>Nome</label>
                                <input type="text" autoFocus className="form-control" required placeholder="Nome" name = "name"></input>
                            </div>
                            <div>
                                <label>Celular</label>
                                <input type="text" required placeholder = "Ex: 99872-9823" name="cell"></input>
                            </div>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" style={{width:'380px'}} name="email" placeholder='email'></input>
                        </div>
                        
                        <div>
                            <label>Mensagem</label>
                            <textarea id='' cols='50' rows="5" required placeholder='Sua mensagem aqui' name="message"></textarea>
                        </div>
                        <div>
                            <input type="submit" classname="btn btn-info" value ="Enviar"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}