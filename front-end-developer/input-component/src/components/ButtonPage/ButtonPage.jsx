import Button from '../Button';

const ButtonPage = () => {
	return (
		<>
			<h1 className="content-title">buttons</h1>
			<div className="list">

				<div className="row">
					<div className="column">
						<p className="list-name">&lt;Button /&gt;</p>
						<Button>Default</Button>
					</div>
					<div className="column">
						<p className="list-name hover-text">&:hover, &:focus</p>
						<Button>Default</Button>
					</div>
				</div>

				<div className="row">
					<div className="column">
						<p className="list-name">&lt;Button variant="outline"/&gt;</p>
						<Button color="primary" variant="outline">Default</Button>
					</div>
					<div className="column">
						<p className="list-name hover-text">&:hover, &:focus</p>
						<Button color="primary" variant="outline">Default</Button>
					</div>
				</div>

				<div className="row">
					<div className="column">
						<p className="list-name">&lt;Button variant="text" /&gt;</p>
						<Button color="primary" variant="text">Default</Button>
					</div>

					<div className="column">
						<p className="list-name hover-text">&:hover, &:focus</p>
						<Button color="primary" variant="text">Default</Button>
					</div>
				</div>

				<div className="row">
					<div className="column">
						<p className="list-name">&lt;Button disabledShadow /&gt;</p>
						<Button color="primary" disableShadow>Default</Button>
					</div>
				</div>

				<div className="row">
					<div className="column">
						<p className="list-name">&lt;Button disabled /&gt;</p>
						<Button disabled>Disabled</Button>
					</div>
					<div className="column">
						<p className="list-name">&lt;Button variant="text" disabled /&gt;</p>
						<Button variant="text" disabled>Disabled text</Button>
					</div>
				</div>

				<div className="row">
					<div className="column">
						<p className="list-name">&lt;Button startIcon="local_grocery_store" /&gt;</p>
						<Button color="primary" startIcon="local_grocery_store">Default</Button>
					</div>

					<div className="column">
						<p className="list-name">&lt;Button endIcon="local_grocery_store" /&gt;</p>
						<Button color="primary" endIcon="local_grocery_store">Default</Button>
					</div>
				</div>

				<div className="row">
					<div className="column">
						<p className="list-name">&lt;Button size="sm"/&gt;</p>
						<Button size="sm">Default</Button>
					</div>
					<div className="column">
						<p className="list-name">&lt;Button size="md"/&gt;</p>
						<Button size="md">Default</Button>
					</div>
					<div className="column">
						<p className="list-name">&lt;Button size="lg"/&gt;</p>
						<Button size="lg">Default</Button>
					</div>
				</div>

				<div className="row">
					<div className="column">
						<p className="list-name">&lt;Button /&gt;</p>
						<Button>Default</Button>
					</div>
					<div className="column">
						<p className="list-name">&lt;Button color="primary" /&gt;</p>
						<Button color="primary" >Default</Button>
					</div>
					<div className="column">
						<p className="list-name">&lt;Button color="secondary" /&gt;</p>
						<Button color="secondary" >Default</Button>
					</div>
					<div className="column">
						<p className="list-name">&lt;Button color="danger" /&gt;</p>
						<Button color="danger" >Default</Button>
					</div>
				</div>

				<div className="row">
					<div className="column">
						<p className="list-name hover-text">&:hover, &:focus</p>
						<Button>Default</Button>
					</div>
					<div className="column">
						<Button color="primary">Primary</Button>
					</div>
					<div className="column">
						<Button color="secondary">Secondary</Button>
					</div>
					<div className="column">
						<Button color="danger">Danger</Button>
					</div>
				</div>

				<div className="row">
					<p className="footer">created by <a target="_blank" rel="noreferrer" href="https://www.github.com/kirontoo">kirontoo</a> - devchallenges.io
					</p>
				</div>
			</div>
			</>
	)
}

export { ButtonPage };
