import md5 from 'md5'

export const yearRegex = /^\d{4}$/
export const blockUrlParamsRegex = /(action|calparms|do|highlight|rev)=/
export const blockUrlPathRegex =
	/wordpress|wp-(admin|content|json|includes|login|secvrity)|wp2|\.env|\.php|\.sql|\.git|src|cdn.js|\.vscode|asn\/\.well-known|wiki\/HelpOn|(ads|security)\.txt|.*\/feed$|index\.rss|^\/-/

export function convert24to12(time: string) {
	const [hours, minutes] = time.split(':').map(Number)
	const date = new Date()
	date.setHours(hours, minutes)
	return date.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })
}

export const formatLocalDate = (d: Date | string) => {
	const date = typeof d === 'string' ? new Date(d) : d
	if (isNaN(date.getTime())) {
		throw new Error('Invalid input date')
	}

	const locale = navigator.language
	const timeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone
	return new Date(d).toLocaleDateString(locale, {
		day: 'numeric',
		month: 'short',
		timeZone,
		year: 'numeric',
	})
}

export const formatLocalDateTime = (d: Date | string) => {
	const date = typeof d === 'string' ? new Date(d) : d
	if (isNaN(date.getTime())) {
		throw new Error('Invalid input date')
	}

	const locale = navigator.language
	const timeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone
	return new Date(d).toLocaleString(locale, {
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		month: 'short',
		timeZone,
		year: 'numeric',
	})
}

export const getGravatarUrl = (email: string) => {
	const hash = md5(email.trim().toLowerCase())
	return `https://gravatar.com/avatar/${hash}`
}

export function getOpenmojiUrl(id: string, palette: 'black' | 'color' = 'color') {
	const baseUrl = 'https://cdn.jsdelivr.net/gh/hfg-gmuend/openmoji'
	// const baseUrl = 'https://unpkg.com/openmoji';
	return `${baseUrl}/${palette}/svg/${id.toUpperCase()}.svg`
}

export const getRandomElement = <T>(arr: T[]): T => {
	return arr[Math.floor(Math.random() * arr.length)]
}

export function getRandomNumber(min: number, max: number) {
	return Math.random() * (max - min) + min
}

export const getYear = (d: string) => {
	// TODO if no parameter is provided, return current year,
	return new Date(d).toLocaleDateString('en-NZ', {
		year: 'numeric',
	})
}
export const isValidEmail = (email: string) => {
	return /^[^@\s]+@[^@\s]+\.[^@\s]+/.test(email)
}

export const normaliseHostname = (host: string) => {
	return host.replace(/^dev\.|\.localhost$/g, '')
}
export const shuffle = <T>(array: T[]) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
			;[array[i], array[j]] = [array[j], array[i]]
	}
}

export function shuffled<T>(array: T[]): T[] {
	shuffle(array)
	return array
}

export function stripHtml(str: string) {
	return str.replace(/<\/?[^>]+(>|$)/g, '').trim()
}
