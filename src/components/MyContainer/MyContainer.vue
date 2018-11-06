<template>
	<div class="myContainer" style="border: 3px solid black">
		<h1>{{ title }}</h1>
		<slot name="content">
			<p>This should be override</p>
		</slot>
	</div>
</template>

<script>
export default {
  name: "MyContainer",
  props: {
    title: {
      type: String,
      default: "Container Title"
    }
  },
  data() {
    return {};
  }
};
</script>
