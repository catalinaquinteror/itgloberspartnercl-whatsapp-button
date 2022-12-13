import React from 'react'
import propTypes from 'prop-types'
import { useCssHandles } from 'vtex.css-handles'
import './styles.css'

type Props = {
  logo: string
  phone: string
  message: string
  width: number
  height: number
}

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
  // console.log(logo, phone, message)
  const formattedMesage = message.replace(/ /g, "%20");
  // console.log("Mensaje formateado", formattedMesage, logo)
  const CSS_HANDLES = [
    "whatsapp-container",
    "whatsapp-logo"
  ]
  const handles = useCssHandles(CSS_HANDLES):
  return (<>
    {/* <div className='fixed bottom-2 right-2 flex flexColumn'> */}
    <div className={handles["whatsapp-container"]}>
      <a
        href={`https://wa.me/${phone}?text=${formattedMesage}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          className={handles['whatsap-logo']}
          src={logo}
          width={width}
          height={height}
          alt="Logo de Whatsapp"
        />
      </a>
    </div>
    {/* <p>{logo}</p>
  <p>{phone}</p>
  <p>{message}</p> */}
  </>
  )
}

WhatsappButton.propTypes = {
  logo: propTypes.string.isRequired,
  phone: propTypes.string.isRequired,
  message: propTypes.string,
  width: propTypes.number,
  height: propTypes.number
}

WhatsappButton.defaultProps = {
  logo: "mi-logo.png",
  phone: "300151215",
  message: "Este es un mensaje de prueba",
  width: 80,
  height: 80
}

WhatsappButton.schema = {
  title: "Botón de Whatsapp",
  type: "object",
  properties: {
    logo: {
      title: "Logo deWhatsapp",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    },
    phone: {
      title: "Teléfono",
      description: "Ingresa tu numero de telefono",
      type: "string"
    }
  },
  message: {
    title: "Teléfono",
    description: "Ingresa tu mensaje",
    type: "string",
    widget: {
      "ui:widget": "textarea"
    }
  },
  width: {
    title: "Teléfono",
    description: "Ingresa tu mensaje",
    type: "string",
    widget: {
      "ui:widget": "textarea"
    }
  },
  height: {
    title: "Teléfono",
    description: "Ingresa tu mensaje",
    type: "string",
    widget: {
      "ui:widget": "textarea"
    }
  }
}
export default WhatsappButton
