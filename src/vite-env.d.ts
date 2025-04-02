/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_TITLE: string
	// その他の環境変数...
	readonly VITE_AUTH0_DOMAIN: string
	readonly VITE_AUTH0_CLIENT_ID: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
