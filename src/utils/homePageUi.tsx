import { RefObject, Dispatch, SetStateAction } from 'react'

const isInViewport = (ref: RefObject<HTMLElement>, set: Dispatch<SetStateAction<boolean>>) => {
	const top = ref.current?.getBoundingClientRect().top;
	if (top) {
		if (top - 400 <= 0) set(true);
	}
}

export {
	isInViewport,
}