
const Generator = () => {
	return (
		<main className='min-h-screen px-6 pb-20 pt-24'>
			<div className='mx-auto max-w-6xl'>
				<header className='mb-10'>
					<p className='text-sm uppercase tracking-[0.3em] text-white/50'>
						Generate UGC
					</p>
					<h1 className='mt-3 text-3xl font-semibold text-white md:text-5xl'>
						Bring your product story to life
					</h1>
					<p className='mt-4 max-w-2xl text-lg text-white/70'>
						Upload two product images and add a clear prompt. We&apos;ll craft
						high-performing UGC based on your creative direction.
					</p>
				</header>

				<div className='relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl md:p-10'>
					<div className='pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl' />
					<div className='pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl' />

					<div className='grid gap-10 lg:grid-cols-[1.1fr_0.9fr]'>
						<section className='rounded-2xl border border-white/10 bg-black/20 p-6'>
							<h2 className='text-xl font-semibold'>Upload your images</h2>
							<p className='mt-2 text-sm text-white/60'>
								Add two angles or lifestyle shots for best results.
							</p>

							<form className='mt-6 space-y-5'>
								<div>
									<label className='text-sm font-medium text-white/80'>
										Image one
									</label>
									<label className='mt-3 flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/20 bg-white/5 px-6 py-8 text-center transition hover:border-white/40'>
										<span className='text-base font-semibold text-white'>
											Drop a file here
										</span>
										<span className='text-sm text-white/60'>
											PNG, JPG up to 10MB
										</span>
										<input
											type='file'
											accept='image/*'
											className='hidden'
											name='imageOne'
										/>
									</label>
								</div>

								<div>
									<label className='text-sm font-medium text-white/80'>
										Image two
									</label>
									<label className='mt-3 flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/20 bg-white/5 px-6 py-8 text-center transition hover:border-white/40'>
										<span className='text-base font-semibold text-white'>
											Drop a file here
										</span>
										<span className='text-sm text-white/60'>
											PNG, JPG up to 10MB
										</span>
										<input
											type='file'
											accept='image/*'
											className='hidden'
											name='imageTwo'
										/>
									</label>
								</div>
							</form>
						</section>

						<section className='flex flex-col rounded-2xl border border-white/10 bg-black/20 p-6'>
							<h2 className='text-xl font-semibold'>Creative direction</h2>
							<p className='mt-2 text-sm text-white/60'>
								Describe the tone, setting, and the key message you want delivered.
							</p>

							<div className='mt-6 flex flex-1 flex-col'>
								<label className='text-sm font-medium text-white/80'>
									Description
								</label>
								<textarea
									name='description'
									placeholder='Example: Bright morning kitchen, confident female creator, highlight the spill-proof lid and quick clean-up...'
									className='mt-3 min-h-[220px] flex-1 resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/40 outline-none transition focus:border-white/40'
								/>
								<div className='mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-white/50'>
									<span>Be specific about the vibe and audience.</span>
									<span>0 / 600</span>
								</div>
								<button className='mt-6 w-full rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-white/90'>
									Generate UGC
								</button>
								<p className='mt-3 text-center text-xs text-white/40'>
									We&apos;ll notify you when your content is ready.
								</p>
							</div>
						</section>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Generator;
