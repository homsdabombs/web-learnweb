function App() {
	return (
		<div className="App">
			<div style={{position: 'relative', display: 'inline-block', padding: '1.5rem 3rem', fontFamily: 'roboto-condensed', fontSize: '2rem', fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center'}}>
				<div style={{position: 'absolute', top: '0', bottom: '0', left: '0', right: '0', backgroundColor: '#FED634', backgroundImage: `url(${'bg-image-banner.png'})`, backgroundSize: 'cover', zIndex: '-1', backgroundPosition: 'top center'}} />
				<span>Borneo Games Kuching 2025 | 24 - 28 September 2025</span>
			</div>
		</div>
        );
}

export default App;