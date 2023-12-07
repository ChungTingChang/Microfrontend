import ReactDOM from 'react-dom/client';

const renderReactElement = (Component, element, props) => {
	if (!Component || !element) return;
	const root = ReactDOM.createRoot(element);

	const RenderComponent = Array.isArray(Component)
		? () => (
				<>
					{Component.map((C, index) => (
						<C {...props[index]} />
					))}
				</>
		  )
		: () => <Component {...props} />;

	root.render(<RenderComponent />);
};

export default renderReactElement;
