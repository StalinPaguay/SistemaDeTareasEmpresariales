import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TareaService } from '../../services/tarea';
import { Observable } from 'rxjs';
import { Tarea } from '../../models/tarea.model';

@Component({
  selector: 'app-task-list',
  imports: [AsyncPipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {

  private tareaService = inject(TareaService);

  tareas$: Observable<Tarea[]> = this.tareaService.getTareas();

  eliminarTarea(id: number): void {
    this.tareaService.eliminarTarea(id).subscribe(() => {
      this.tareas$ = this.tareaService.getTareas();
    });
  }
}
