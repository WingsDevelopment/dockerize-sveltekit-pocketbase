<script lang="ts">
	const post = async () => {
		const response = await fetch('/api/simple-post', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await response.json();
		console.log(data);
		if (!response.ok) {
			window.alert('error');
			return;
		}
		window.alert('success');
	};

	const get = async () => {
		const response = await fetch('/api/simple-get');
		const data = await response.json();
		console.log(data);
		if (!response.ok) {
			window.alert('error');
			return;
		}
		window.alert('success');
	};
</script>

<p>
	'Post tag' should create tag : name:'tag1', also should show resposne in console and window alert
	success
</p>
<p>'Get tag' should be called after post, should window alert success and log data in console,</p>

<button on:click={post}>Post tag</button>
<button on:click={get}>Get tag</button>
