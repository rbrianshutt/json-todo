import Image from 'next/image';
import './globals.css';
import TodosList from './todos/TodosList';
import React, { Suspense } from 'react';

export default function Home() {
	return (
		<div className='flex flex-col space-y-10'>
			<Suspense fallback={<p className='text-blue-500'>Loading the todos...</p>}>
			
				<div className='flex space-x-2'>
					{/* @ts-ignore*/}
					<TodosList />
				</div>
			</Suspense>

      <Suspense fallback={<p className='text-red-500'>Loading the trolley...</p>}>
			
			<div className='flex space-x-2'>
				{/* @ts-ignore*/}
				<TodosList />
			</div>
      </Suspense>
		</div>
	);
}
