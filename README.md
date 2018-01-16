# Overwatch API to get your SR
This is an API layer written over [SunDwarf](https://github.com/SunDwarf)'s [OWAPI](https://owapi.net) to retrieve your Overwatch competitive SR (skill rating).

## Usage

**`GET http://owapifornightbot.herokuapp.com/BATTLE-TAG/REGION/comprank`**

**Returns a string representation of the Overwatch competitive SR for a BattleTag and region, or null if unavailable.**

BATTLE-TAG: Replace the `#` in your BattleTag with a hyphen. For example, if your BattleTag is FallenSlayer#3592, then use `FallenSlayer-3592`

REGION: `eu`, `kr`, or `us`

*Example:*

`http://owapifornightbot.herokuapp.com/Dad-12262/us/comprank`

*Result:*

```json
3031
```
