## rosy maple moth
`13-09-2026 12:36`
- As I'm trying to obtain my long socks to negate fall damage, I was struggling to find the material -- moth fuzz. Apparently it's from the **@Estrogen** mod, requiring me to shear these rosy maple moth creatures that spawn at night in the Dark Oak Forests. 
- I was struggling to find any of them, though I did eventually find one. But shearing it did nothing, so...
```kotlin
class MothEntity(type: EntityType<MothEntity>, level: Level) : Animal(type, level), FlyingAnimal, Shearable {
    val flyingAnimationState: AnimationState = AnimationState()
    val idleAnimationState: AnimationState = AnimationState()
    val fuzzUpFlyingAnimationState: AnimationState = AnimationState()
    val fuzzUpIdleAnimationState: AnimationState = AnimationState()
    val landingAnimationState: AnimationState = AnimationState()
    val takingOffAnimationState: AnimationState = AnimationState()

    var ticksToFuzzUp: Int = 0
        get() {
            if (field == 0) {
                field = this.random.nextIntBetweenInclusive(12000, 36000)
            }
            return field
        }
        private set

    private var fuzzingUp = false
    private var fuzzupCooldown = 0
    
    // ... 
    // Inside override fun tick() 
    // =====
		if (!this.level().isClientSide && !this.isFuzzy() && !this.isBaby) {
		if (this.level().gameTime % this.ticksToFuzzUp == 0L) {
			this.setFuzzy()
			repeat(7) {
				this.spawnFuzzyParticle(
					this.level(),
					this.x - 0.3,
					this.x + 0.3,
					this.z - 0.3,
					this.z + 0.3,
					this.getY(0.5),
					getParticleType()
				)
			}
			this.playSound(EstrogenSounds.MOTH_FUZZ_UP.get())
			this.fuzzingUp()
		}
	}
	// =====

```
> I looked through the code. This file located at `Estrogen/src/main/kotlin/dev/mayaqq/estrogen/content/entities/MothEntity.kt` holds the code for the Rosy Moth entity.

From the code snippet above (which I had to git clone the [Estrogen mod](https://github.com/MayaqqDev/Estrogen/tree/1.21.1-only) for), I found a few nifty things:
1. The amount of time before a rosy moth fuzzes up (becomes available to be sheared) is between 12000 and 36000 ticks, equivalent to 10-30 minutes.
2. The noise it makes when it fuzzes up is rather scrapy.
3. When fuzzed up, it creates 7 fuzzy particles that moves a distance of 0.6 units in the X and Z directions
4. Moths can be bred with any item of the `LEATHER_ITEMS` tag (which includes leather, leather armor and...*leather horse armor?!* but NOT tanned leather), giving you the rare and *very* cute baby moth :3
## NutritionZ
![[Pasted image 20261026021159.png]]
> NutritionZ default vanilla carbs/protein/fats/vitamins/minerals nutrition table, stored within `nutrition/vanilla_items.json` on [GitHub](https://github.com/xR4YM0ND/NutritionZ/blob/1.21/src/main/resources/resourcepacks/minecraft_nutritionz/data/minecraft/nutrition/vanilla_items.json)

I made a spreadsheet with all the nutritional info for the default nutrition table. From the list, it appears that only 11 foods are viable as nutritionally complete:
- golden_carrot -> perfect candidate, will require a little gold
- ~~apple -> zero fats
- ~~golden_apple -> too much gold, zero fats
- ~~enchanted_golden_apple~~
- ~~sweet_berries -> zero proteins or fats
- ~~beetroot_soup -> zero fats
- suspicious_stew -> ??
- rabbit_stew -> cannibalism...but it *would* be nutritionally complete
- carrot -> nutritionally complete but little saturation
- melon_slice -> No.
- ~~glow_berries -> zero fats
- ~~beetroot -> zero fats~~
![[Pasted image 20261026021209.png]]
> Fuck. The table is inaccurate. :sob:

![[Pasted image 20261026021214.png]]
> The ACTUAL nutritional table[^1], located in `~/.var/app/org.prismlauncher.PrismLauncher/data/PrismLauncher/instances/Spectral\ Creation/minecraft/mods/data/nutritionz/nutrition/vanilla_items.json`. Oh my god.

Back to our contenders:
- golden_carrot -> still...wait, that's *still* not right. What? Where are the correct values??
![[Pasted image 20261026021223.png]]
> I checked the `common:has_nutirition_nutrients` item tag *in game* instead of fiddling around trying to find the actual nutritionz config file (which I DID look for!!)

After checking the food tag *in game*, I got these contenders for a fulfilling nutritionally complete meal:
- Rabbit stew -> possible...if I forego my *morals*
- Chocolate glazed berries -> needs sugar, cocoa beans and milk. and berries
- Suspicious stew -> unsure if a good idea?
- Pumpkin pie -> actually decent
== SPECTRUM MOD (RECIPE UNRESEARCHED) ==
- Bodacious berry bar ->
- Fissure plum ->
- Ashen tart ->
- Puff tart ->
- Myceylon pumpkin pie ->
- Triple meat pot stew ->
- Bagnun ->
- Banyash ->
- Chauve souris au vin ->
- Crawfish cocktail ->
- Hare roast -> noooo~ ;-;
- Junket ->
- Meatloaf?
- Meatloaf sandwich -> perfectly nutritionally balanced, 10 each
- Peaches flambe ->
- Rabbit cream pie -> uwu?
- Slushide ->
== SPECTRUM MOD END ==

[^1]: :clueless:

#modding #minecraft