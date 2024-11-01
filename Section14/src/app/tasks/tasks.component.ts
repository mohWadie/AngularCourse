import { Component, inject, input } from '@angular/core';
import { ResolveFn, RouterLink } from '@angular/router';

import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';
import { Task } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent {
  userTasks = input.required<Task[]>();
  userId = input.required<string>();
  order = input<'asc' | 'desc' | undefined>();
}

export const resolveUserTasks: ResolveFn<Task[]> = (
  activatedRouteSnapshot,
  routerState
) => {
  const order = activatedRouteSnapshot.queryParams['order'];
  const tasksService = inject(TasksService);
  const tasks = tasksService
    .allTasks()
    .filter(
      (task) => task.userId === activatedRouteSnapshot.paramMap.get('userId')
    );

  if (order && order === 'asc') {
    tasks.sort((a, b) => (a.id > b.id ? 1 : -1));
  } else {
    tasks.sort((a, b) => (a.id > b.id ? -1 : 1));
  }

  return tasks.length ? tasks : [];
};

// import {
//   Component,
//   computed,
//   DestroyRef,
//   inject,
//   input,
//   OnInit,
//   signal,
// } from '@angular/core';

// import { TaskComponent } from './task/task.component';
// import { Task } from './task/task.model';
// import { TasksService } from './tasks.service';
// import { ActivatedRoute, RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-tasks',
//   standalone: true,
//   templateUrl: './tasks.component.html',
//   styleUrl: './tasks.component.css',
//   imports: [TaskComponent, RouterLink],
// })
// export class TasksComponent implements OnInit {
//   userId = input.required<string>();
//   // order = input<'asc' | 'desc'>();
//   order = signal<'asc' | 'desc'>('desc');

//   private tasksService = inject(TasksService);
//   private activatedRoute = inject(ActivatedRoute);
//   private destroyRef = inject(DestroyRef);

//   userTasks = computed(() =>
//     this.tasksService
//       .allTasks()
//       .filter((t) => t.userId === this.userId())
//       .sort((a, b) => {
//         if (this.order() === 'desc') {
//           return a.dueDate > b.dueDate ? -1 : 1;
//         } else {
//           return a.dueDate < b.dueDate ? -1 : 1;
//         }
//       })
//   );

//   ngOnInit(): void {
//     const subscription = this.activatedRoute.queryParams.subscribe({
//       next: (params) => this.order.set(params['order']),
//     });

//     this.destroyRef.onDestroy(() => {
//       subscription.unsubscribe();
//     });
//   }
// }
