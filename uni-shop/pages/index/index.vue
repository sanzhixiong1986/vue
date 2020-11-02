<template>
	<view>
		
			<view 
				v-for="(item, index) in goodsList" :key="index"
				class="guess-item"
				@click="navToDetailPage(item)"
			>
				<view class="image-wrapper">
					<image :src="item.image" mode="aspectFill"></image>
				</view>
				<text class="title clamp">{{item.title}}</text>
				<text class="price">￥{{item.price}}</text>
			</view>
		</view>
	</view>
</template>
<script>
	
</script>

<style lang="scss">
	
</style>
