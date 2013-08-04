describe('RecipeModel', function(){
	it('Has a default title "Testar testfallen"', function(){
		var recipe = new Recipe();
		expect(recipe.get('title')).toEqual('Testar testfallen');
	});
});	