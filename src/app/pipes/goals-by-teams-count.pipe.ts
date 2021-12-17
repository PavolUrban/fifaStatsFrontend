import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'goalsByTeamsCount'
})
export class GoalsByTeamsCountPipe implements PipeTransform {

  transform(goalsByTeams): number {
    let value = Object.keys(goalsByTeams).length;
    return value;
  }

}
