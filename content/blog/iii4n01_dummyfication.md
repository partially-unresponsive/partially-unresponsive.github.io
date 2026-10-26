---
title: iii4n01_dummyfication
---
# 0x00. Introduction to III (Issy's Illogical Inquiries)
- Hello hi. *Words.*
- Blog! For less graphic things, which still require words, i.e., anything that isn't script-worthy. Like a second YT channel. Unlike most other blogs, this one doesn't have any *outright* inspirations or favorites, but I'm hoping for that to change as I'm actively looking for notable inspirations to follow on a self-hosted RSS feed[^1]. The name of III or iii or iii4n isn't set in stone, but I like the idea, and I doubt I'll encounter symbol ambiguity with roman symbols soon enough to care. It's quite obviously inspired by Factorio's [FFF](https://www.factorio.com/blog/post/fff-449), one of my favorite games. Maybe I encourage it even, so that searching for me will be even harder. Who cares? Become ungovernable.
- Name's issy, I'm hissy, time to spread missynformation. (,,>ヮ<,,)

[^1]: Possibly the basis for iii#02
# 0x01. A Dummy's Motivation for For Dummies
- The [For Dummies](https://www.goodreads.com/list/show/2683.For_Dummies_Series) book series (which you can read the wiki page of in less than 600 words), consisting of 333 different books and 288 separate authors[^2] (35 books being written by a "Goodreads Author"), seems just neat to me. It's varied in subjects, with many different authors, with an immediately recognizable cover art and book content, and always some [The 5th Wave](https://en.wikipedia.org/wiki/The_5th_Wave_(comic_strip)) comic strip that is completely incomprehensible to me. Even though there are only 3 books outright advertised for seniors in their name, it feels like there should be more, given that the purpose of the book series is to be short and precise in simple words as to not be intimidating. Or maybe seniors don't mind being intimidated. Who knows?
- Anyways, saw a video on my feed made by [The Thread Theory](https://youtu.be/aWkNRy880Mo) about why giving this series a try is worth it, and, without bothering to even watch it or see his talking points... 

[^2]: Values based off of what's been published to Goodreads. I'm assuming that books that haven't been reviewed or credited on that website don't really have an audience.
# 0x02. The Spreadsheet
- ...I instantly decided to make a spreadsheet with *all of them!*![[Pasted image 20261025110313.png]]
> The Dummyfication spreadsheet in all its glory, displayed in Google Sheets.[^3] It houses 7 categories, 3 of which (`BookURL, AuthorURL, CoverImageURL`) are not displayed properly, though I could, in the future, have a better visualizer. I've also un-italicized the ratings later, as why in the hell would I want them to look like *that*?

>[!note]
> I've since removed all seemingly non-Dummy books from my spreadsheet, but just in case, here they are:
> - *Find Your Wild: How to honor Your True Nature and Go After Your Dreams!*
> - *Creating Abundance & Living Generously*
> - *Talk to Me I'm Grieving: Supportive Ways to Help Someone Through Grief*
> - *The Complete Idiot's Guide to Tarot* sounds close to fitting, but apparently isn't liked even by the Tarot-reading society
> - *eBay PowerSeller Business Practices* is actually a For Dummies book, despite not having that in its title! However, it gets deleted from my spreadsheet for not including any mildly derogatory insult in its title. Too bad!
> - *The Secret Method for Growing Younger: My Journey Through Alzheimer's to the Fountain of Youth Using the Law of Attraction* with a whole 9 reviews by people who hopefully will attract good luck.

[^3]: I would like to have a prettier display for the spreadsheet, maybe in a different CSV visualizer, but this is good for now. I'll die before submitting myself to using default Markdown tables, and I like the font variation and color gradients, as well as the searching and category features.
# 0x03. The How
![[Pasted image 20261025110335.png]]
> The entire code file rendered using [Carbon](https://carbon.now.sh/) using Lucario theming because I like the pokemon. Full source code available in `~/github/Dummyfication/parseList.py` or in a private GitHub repo.
- Python script. There were many ways of going about this -- maybe there's an API, maybe go through Amazon listings, maybe- *nope*. Dead simple HTML parsing approach with BS4 for dummy me, and I think it worked well enough -- besides the 7 entries in my spreadsheet with malformed data, we don't talk about those. (¬_¬")💢
# 0x04. ceil()
- Rounding up, I'm pretty happy with the fact that I made this. Am I going to read the books now? Who knows, really. I have an interest in reading at least a couple, and I do intend to pick a book or two in areas that interest me. Sadly I don't really see many "`More (.*)? For Dummies`" type books on the list, precisely because the format of serving people unintimidating information acts as a good primer into the subject, but without the requirement of going deep into any subject, most of everything can be laid out in just one book. If someone really wants to get into something, they can just pick a non-Dummy book.
- I'd be really invested in doing a similar analysis[^6] on the [Schaum's Outlines](https://www.goodreads.com/list/show/172121.schaum_outlines) book series[^4], as that is something I'm much more invested in The level of detail and complexity in these so-called "outlines" is quite staggering, and could likely be a great challenger for going through one at a time, albeit very challenging and time consuming...but probably a better investment than my Factorio Nullius [^5] playthrough :p 
- For now, this is all I've got. issy out

[^4]: although I immediately notice a discrepancy between the Listopia list (100 entries) and the [Amazon Kindle](https://www.amazon.com/Schaums-Outlines/dp/B09ZP6Q2NC) listing (112 book series) and the [thriftbooks entry](https://www.thriftbooks.com/series/schaums-outline/71382/) (100 entries). It wouldn't be the first time that Amazon would've inflated their own capabilities, but I'm sure there's just some duplicates or discontinued things there.

[^5]: Here I'd usually place a soon-to-be-written page URL, however I've opted for the approach of intentionality at the time of writing, rather than casting off dead hyperlinks before the need or desire to write that blog arrives. This goes against my usual Obsidian nature, but could be better for me overall. Also I'm 11 hours in and battling a continuous hydrogen deficiency, please HHelp (ˊ•͈ ◡ •͈ˋ)♡

[^6]: The program can technically be extended to work on any Listopia list by simply `curl`ing the N pages necessary to get through, then performing the parsing. I'll get by with just manually supplying the HTML files for now using the "Save Page as HTML" feature.

![[Pasted image 20261025110347.png]]
> unrelated but cute lil' Dummy shrimp from the aqueerium :3 [credit](https://x.com/omnicshrimp/status/2095091806341898717)

# 0x05. Extra: Schaums Outlines
![[Pasted image 20261025110352.png]]
> P.S.: I also made a spreadsheet for the Schaum's books. Neato. I'm interested in basically everything here, but would like to put my efforts into something practical for once xP

```
created: 06-09-2026 14:59
status:  completed
```
#III #python #data #books