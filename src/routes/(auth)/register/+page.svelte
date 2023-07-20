<script>
	import { enhance } from '$app/forms';
</script>

<form
	method="POST"
	class="flex flex-col rounded-3xl bg-white px-16 pb-6 pt-14 shadow-md"
	use:enhance
>
	<hgroup class="text-center">
		<h2 class="border text-3xl">Logo goes here</h2>
		<h3 class="my-6 text-xl">Create Your Account</h3>
	</hgroup>

	<div class="flex flex-col gap-3">
		<label for="name">Name</label>
		<input type="text" id="name" name="name" required class="h-12 w-96 border px-3" />

		<label for="username">Username</label>
		<input type="text" id="username" name="username" required class="h-12 w-96 border px-3" />

		<label for="password">Password</label>
		<input type="password" id="password" name="password" required class="h-12 w-96 border px-3" />
	</div>
	<button
		type="submit"
		class="mt mx-auto mt-4 h-12 w-full max-w-[15rem] rounded-full bg-primary text-lg text-white"
		>Register Now</button
	>
</form>
<p class="mt-3 text-center text-slate-500">
	I’m already member? <a class="text-primary underline" href="/login">Login</a>
</p>
