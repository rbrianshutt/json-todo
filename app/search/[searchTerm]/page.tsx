import React from 'react';
import { StringLiteral } from 'typescript';

type PageProps = {
	params: {
		searchTerm: string;
	};
};

type SearchResult = {
	organic_results: [
		{
			position: number;
			title: string;
			link: string;
			thumbnail: string;
			snippet: string;
		}
	];
};

const search = async (searchTerm: string) => {
	const res = await fetch(
		`https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
	);
    //throw new Error('Something went wrong')
	const data: SearchResult = await res.json();
	return data;
};

async function SearchResults({ params: { searchTerm } }: PageProps) {
	const searchResults = await search(searchTerm);
	return (
		<div className='text-gray-500 text-sm'>
			<p>You searched for: {searchTerm}</p>
			<ol className='space-y-5 p-5'>
				{searchResults.organic_results.map((result) => (
					<li key={result.position}>
						<p>{result.title}</p>
						<p>{result.snippet}</p>
					</li>
				))}
			</ol>
		</div>
	);
}

export default SearchResults;
