package com.taskhive.restfulwebservices.tasks;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import org.springframework.stereotype.Service;

@Service
public class TaskService {
	
	private static List<Task> tasks = new ArrayList<>();
	private static int tasksCount = 0;
	
	static {
		tasks.add(new Task(++tasksCount, "csameeerz","Oil Painting",
							LocalDate.now().plusYears(1), false ));
		tasks.add(new Task(++tasksCount, "csameeerz","Learn Guitar",
				LocalDate.now().plusYears(1), false ));
		tasks.add(new Task(++tasksCount, "csameeerz","Play Badminton",
				LocalDate.now().plusYears(1), false ));
	}
	
	public List<Task> findByUsername(String username){
		Predicate<? super Task> predicate =
				task -> task.getUsername().equalsIgnoreCase(username);
		return tasks.stream().filter(predicate).toList();
	}
	
	public Task addTask(String username, String description, LocalDate targetDate, boolean completed) {
		Task task = new Task(++tasksCount,username,description,targetDate,completed);
		tasks.add(task);
		return task;
	}
	
	public void deleteById(int id) {
		Predicate<? super Task> predicate = task -> task.getId() == id;
		tasks.removeIf(predicate);
	}

	public Task findById(int id) {
		Predicate<? super Task> predicate = task -> task.getId() == id;
		Task task = tasks.stream().filter(predicate).findFirst().get();
		return task;
	}

	public void updateTask(Task task) {
		deleteById(task.getId());
		tasks.add(task);
	}
}