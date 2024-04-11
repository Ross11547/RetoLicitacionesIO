import React from 'react'

const Inicio = () => {
  return (
    <div>
        <div>

        </div>
        <BodyF>
      <ContentFI>
        <ImgF
          src="https://www.shutterstock.com/image-photo/portrait-young-female-lawyer-attorney-600nw-2139778293.jpg"
          alt="imagen"
        />
      </ContentFI>
      <ContentF>
        <DivContent>
          <h4>Company</h4>
          <a href="/nosotros">Nosotros</a>
          <a href="/areapractica">Áreas de Práctica</a>
        </DivContent>
        <DivContent>
          <h4>Contact</h4>
          <a
            href={`https://api.whatsapp.com/send?phone=${+59170727383}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp 1
          </a>
          <a
            href={`https://api.whatsapp.com/send?phone=${+59170723161}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp 2
          </a>
        </DivContent>
        <DivContent>
          <h4>Social Networks</h4>
          <a
            href={`https://www.facebook.com/belc.consortium?mibextid=ZbWKwL`}
          >
            Facebook
          </a>
          <a href={``}>Instagram</a>
        </DivContent>
      </ContentF>
    </BodyF>
    </div>
  )
}

export default Inicio