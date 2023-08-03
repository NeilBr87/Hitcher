# Note of driving distances for my switch case in TravelMenu

# Method:

* If a town has one originator (ie the user can only have got there from one other town) then that distance is applied.
* If a town has two or more originators (ie the user can only have got there from two other towns) then the average of those distances is applied.
* Until the board is completely filled, we'll average out at 2 hours for any not accounted for.

Round up to the nearest hour.



## Towns

### UK
* London no originators, starting location
* Crawley: one originator(London): 2 hours
* Winchester: one originator(London): 2 hours
* Maidstone: one originator(London): 2 hours
* Dover: 2 orig (Crawley, Maidstone): 2 hours
* Folkstone: 2 orig (Crawley, Maidstone): 2 hours
* Newhaven: 3 orig (Crawley, Maidstone, Winchester): 2 hours
* Portsmouth: 2 orig (Winchester, Crawley): 2 hours

### France
* Caen: one orig (Portsmouth): 6 hours (FERRY)
* Dieppe: one orig (Newhaven): 4 hours (FERRY)
* Calais: 2 orig (Dover, Folkstone): 2 hours (FERRY)
* Paris:   


