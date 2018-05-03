import { Pipe, PipeTransform} from '@angular/core';
import { Potato } from '../models/potato.model';
@Pipe({
    name: 'searchFilter'
})
export class SearchFilter implements PipeTransform {
  transform(list: Potato[], search: string | undefined): any {
    if (!search || !search.trim()) {
      return list;
    }
    search = search.toLowerCase();
    return list.filter(it => {
        return it.title.toLowerCase().includes(search)
        || it.description.toLowerCase().includes(search)
        || it.tags.toLowerCase().includes(search);
    });
  }
}
