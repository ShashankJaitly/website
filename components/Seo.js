import Head from "next/head";

const SEO = ({ metaData }) => {
	return (
		<Head>
			<title>{metaData.title}</title>
			<meta charSet="UTF-8" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
			<meta
				name="viewport"
				content="width=device-width,initial-scale=1, shrink-to-fit=no"
			/>
			<meta name="theme-color" content="#222222" />
			<link rel="shortcut icon" href="/static/favicon_io/favicon.ico" />
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/static/favicon_io/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/static/favicon_io/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/static/favicon_io/favicon-16x16.png"
			/>
			<link
				rel="manifest"
				href="/static/favicon_io/site.webmanifest"
			></link>

			<link rel="canonical" href={metaData.url} />

			<meta name="title" content={metaData.title} />
			<meta name="author" content={metaData.handle} />
			<meta name="description" content={metaData.description} />
			<meta name="keywords" content={metaData.keywords} />

			<meta property="og:type" content="website" />
			<meta property="og:url" content={metaData.url} />
			<meta property="og:title" content={metaData.title} />
			<meta property="og:description" content={metaData.description} />
			{/* <meta property="og:image" content="/static/images/about.jpg" /> */}
			<meta property="og:image:type" content="image/jpeg" />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={metaData.url} />
			<meta property="twitter:title" content={metaData.title} />
			<meta
				property="twitter:description"
				content={metaData.description}
			/>
			{/* <meta property="twitter:image" content="/static/images/about.jpg" /> */}
			<meta name="twitter:image:alt" content={metaData.title} />
			<link
				href="/static/images/dsc_main.jpg"
				rel="icon"
				type="image/jpeg"
			/>
		</Head>
	);
};

export default SEO;
