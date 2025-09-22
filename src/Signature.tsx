import { HeartLogo } from "./HeartLogo"

const Signature = () => {
	return (
		<div style={{ 
			 padding: '16px', 
			 fontSize: '14px', 
			 color: '#555', 
			 display: 'flex', 
			 alignItems: 'center', 
			 justifyContent: 'flex-start', 
			 gap: '8px'
			  }}>
			<p>Developed by BeruzDev</p>
			<HeartLogo />
		</div>
	)
}

export default Signature
