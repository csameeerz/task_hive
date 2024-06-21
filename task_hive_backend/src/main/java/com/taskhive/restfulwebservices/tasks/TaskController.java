package com.taskhive.restfulwebservices.tasks;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TaskController {

    private TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/users/{username}/tasks")
    public List<Task> getTasksByUsername(@PathVariable String username) {
        return taskService.findByUsername(username);
    }

    @GetMapping("/users/{username}/tasks/{id}")
    public Task getTaskById(@PathVariable String username, @PathVariable int id) {
        return taskService.findById(id);
    }

    @DeleteMapping("/users/{username}/tasks/{id}")
    public ResponseEntity<Void> deleteTaskById(@PathVariable String username, @PathVariable int id) {
        taskService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/users/{username}/tasks/{id}")
    public Task updateTaskById(@PathVariable String username, @PathVariable int id, @RequestBody Task task) {
        taskService.updateTask(task);
        return task;
    }

    @PostMapping("/users/{username}/tasks")
    public Task createTask(@PathVariable String username, @RequestBody Task task) {
        Task createdTask = taskService.addTask(username, task.getDescription(), task.getTargetDate(), task.isCompleted());
        return createdTask;
    }
}
