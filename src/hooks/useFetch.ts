/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import useSWR from 'swr'
import api from '../service/api'

export function useFetch<Data = any>(url: string) {
	const { data, error } = useSWR<Data>(url, async url => {
		const response = await api.post(url)

		return response.data
	})

	return { data, error }
}
